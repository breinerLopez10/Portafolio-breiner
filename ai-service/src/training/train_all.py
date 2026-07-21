import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.neighbors import NearestNeighbors
from xgboost import XGBClassifier
import joblib
import os

# Create directories if not exist
os.makedirs('models', exist_ok=True)

def train_recommender(interactions_df):
    """
    User-Item Matrix Recommender using Nearest Neighbors (Collaborative Filtering)
    """
    print("Training Recommender...")
    user_item_matrix = interactions_df.pivot(index='user_id', columns='product_id', values='rating').fillna(0)
    
    model = NearestNeighbors(metric='cosine', algorithm='brute')
    model.fit(user_item_matrix.values)
    
    joblib.dump(model, 'models/recommender_model.joblib')
    joblib.dump(user_item_matrix.index, 'models/user_index.joblib')
    print("Recommender model saved.")

def train_churn_model(user_data):
    """
    XGBoost for Churn Prediction
    Features: Recency, Frequency, Monetary (RFM)
    """
    print("Training Churn Model...")
    X = user_data[['recency', 'frequency', 'monetary', 'activity_score']]
    y = user_data['churned']
    
    model = XGBClassifier(use_label_encoder=False, eval_metric='logloss')
    model.fit(X, y)
    
    joblib.dump(model, 'models/churn_model.joblib')
    print("Churn model saved.")

def train_segmentation(user_data):
    """
    K-Means for Customer Segmentation
    """
    print("Training Segmentation...")
    X = user_data[['recency', 'frequency', 'monetary']]
    
    # Normalize data if needed, but for example purposes:
    kmeans = KMeans(n_clusters=4, random_state=42)
    kmeans.fit(X)
    
    joblib.dump(kmeans, 'models/segmentation_model.joblib')
    print("Segmentation model saved.")

if __name__ == "__main__":
    # Synthetic data for demonstration
    users = 100
    products = 50
    
    # Recommendations data
    interactions = pd.DataFrame({
        'user_id': np.random.randint(0, users, 500),
        'product_id': np.random.randint(0, products, 500),
        'rating': np.random.randint(1, 6, 500)
    }).drop_duplicates(['user_id', 'product_id'])
    
    # User profile data (Churn & Segments)
    user_profile = pd.DataFrame({
        'user_id': range(users),
        'recency': np.random.randint(1, 365, users),
        'frequency': np.random.randint(1, 50, users),
        'monetary': np.random.randint(10, 1000, users),
        'activity_score': np.random.random(users),
        'churned': np.random.randint(0, 2, users)
    })
    
    train_recommender(interactions)
    train_churn_model(user_profile)
    train_segmentation(user_profile)
