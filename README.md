# nulldisk-backend
NullDisk Django Backend

## Install Required Packages
```console
pip install requirements.txt
```

## Create Config file
in root directory, make .env file and set a random secret key
```python
SECRET_KEY='Some random key DSFGsdgsdfg@#$@#$@#$'
```
## Make Migrations
```python
./manage.py makemigrations
```

## Render Static Files
```python
./manage.py collectstatic
```
