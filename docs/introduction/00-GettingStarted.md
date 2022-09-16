# 0. Getting Started

## Launching the development environment

> 💡 Prerequisite: Do ensure you have [Docker](https://www.docker.com/get-started) installed on your local machine! Also, make sure that Docker desktop is running on the background!

1. Frontend: https://gitlab.com/2022-engineering-bootcamp-gds/frontend
2. Backend: https://gitlab.com/2022-engineering-bootcamp-gds/backend
3. Infrastructure: https://gitlab.com/2022-engineering-bootcamp-gds/infrastructure

Let's get things up and running!

Firstly, clone this repository and navigate into the main codebase

```console
git clone <your-repo-here>
git fetch
cd 2021-bootcamp-gds
```

Checkout to the exercise branch

```console
git checkout exercises/frontend
```

Run the command below:

```console
docker-compose up --build
```

If running docker compose in detached mode instead (`docker-compose up --build --detach`), viewing the logs of a container is simple:

```console
docker logs 2021-bootcamp-gds_frontend_1
```

```console
docker logs 2021-bootcamp-gds_backend_1
```

To tear down the environment:

```console
docker-compose down
```

If all is good, access the locally hosted front end app at `http://localhost:3000/`


![Frontend App](https://user-images.githubusercontent.com/43963814/134466840-341293c3-c0cd-4edd-b64d-e6564ab20199.png "Frontend App")

You should arrive at this screen