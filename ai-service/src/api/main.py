from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np
import pandas as pd
from typing import List

app = FastAPI(title="Ecommerce AI Service", version="1.0.0")

# Load models at startup
MODELS = {}

try:
    MODELS['recommender'] = joblib.load('models/recommender_model.joblib')
    MODELS['user_index'] = joblib.load('models/user_index.joblib')
    MODELS['churn'] = joblib.load('models/churn_model.joblib')
    MODELS['segmentation'] = joblib.load('models/segmentation_model.joblib')
except Exception as e:
    print(f"Warning: Models not loaded. Run training script first. Error: {e}")

# Schemas
class RecommendationRequest(BaseModel):
    user_id: int
    n_items: int = 5

class ChurnRequest(BaseModel):
    recency: int
    frequency: int
    monetary: float
    activity_score: float

class SegmentRequest(BaseModel):
    recency: int
    frequency: int
    monetary: float

# Endpoints
@app.get("/")
def health_check():
    return {"status": "online", "models_loaded": list(MODELS.keys())}

@app.post("/recommendations")
async def get_recommendations(req: RecommendationRequest):
    if 'recommender' not in MODELS:
        raise HTTPException(status_code=503, detail="Model not available")
    
    # Simple logic: find user in index and get neighbors
    # In a real app, you'd handle new users (cold start) differently
    try:
        user_idx = list(MODELS['user_index']).index(req.user_id)
        # This is a placeholder for the actual neighbor lookup logic
        return {"user_id": req.user_id, "recommended_products": [101, 202, 303]}
    except ValueError:
        return {"user_id": req.user_id, "recommended_products": [1, 2, 3], "note": "Popular products (fallback)"}

@app.post("/churn")
async def predict_churn(req: ChurnRequest):
    model = MODELS.get('churn')
    if not model:
        raise HTTPException(status_code=503, detail="Churn model not available")
    
    features = np.array([[req.recency, req.frequency, req.monetary, req.activity_score]])
    probability = model.predict_proba(features)[0][1]
    
    return {
        "churn_probability": float(probability),
        "risk_level": "high" if probability > 0.7 else "low"
    }

@app.post("/segments")
async def get_segment(req: SegmentRequest):
    model = MODELS.get('segmentation')
    if not model:
        raise HTTPException(status_code=503, detail="Segmentation model not available")
    
    features = np.array([[req.recency, req.frequency, req.monetary]])
    cluster = int(model.predict(features)[0])
    
    segments = {0: "VIP", 1: "At Risk", 2: "Occasional", 3: "New"}
    return {"cluster_id": cluster, "segment_name": segments.get(cluster, "Unknown")}

@app.get("/demand/{product_id}")
async def predict_demand(product_id: int):
    # Placeholder for Time Series model (e.g. Prophet or ARIMA)
    return {"product_id": product_id, "forecasted_sales_next_30d": 150}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
