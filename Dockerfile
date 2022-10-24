FROM python:3.8-alpine3.15

WORKDIR /app

RUN apk add --update --no-cache --virtual .tmp-build-deps gcc g++ libc-dev 

RUN pip install --upgrade pip

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

ENTRYPOINT ["./gunicorn_starter.sh"]

# docker run -p 8000:8000 -v ${pwd}/website/database:/app/website/database blog-web:1.0 (in Power Shell)