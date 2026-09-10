from fastapi.testclient import TestClient

from main import app


def test_health_returns_expected_status_and_message():
    response = TestClient(app).get("/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok", "message": "Hello from the backend!"}
