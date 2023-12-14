docker build --no-cache -f SQL\Dockerfile.PostgreSql -t postamat7-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t postamat7-java/app ../../..
