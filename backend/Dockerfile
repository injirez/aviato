# Используем офифциальный образ python
FROM python:3.11.3-alpine

# Создаем рабочую директорию в контейнере
WORKDIR /opt/aviato/backend

# Создаем переменные
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Копируем файл с зависимостями ииверсиями
COPY ./requirements.txt .

# Устанавливаем пакет pip
RUN pip install --upgrade pip

# Устанавливаем все необходимые зависимости
RUN pip install -r requirements.txt

# Добавляем Django приложение
ADD . /opt/aviato/backend