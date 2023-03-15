# aviator
## Start backend:
### Setup virtual environment:
```
cd backend
python -m venv venv
source venv/bin/activate # maybe differently on windows
pip install -r requirements.txt
```
### Setup Django app:
```
python manage.py migrate
python manage.py runserver <optional address> # default 127.0.0.1:8000
```