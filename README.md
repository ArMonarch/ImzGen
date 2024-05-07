# ImzGen
Image generation using stable diffusion 

## Installation
1. clone the repositorie and cd into it

``` bash
git clone https://github.com/ArMonarch/ImzGen.git
cd ImzGen
```

2. create a virtual environment for python
``` bash
python3 -m venv venv
source venv/bin/activate
```

3. install necessary packages from requirement.txt
```bash
pip install -r requirement.txt
```

4. install necessary node_modules aka npm packages for each frontend-pages
```bash 
cd frontend-vite
ls
```
```bash
cd login-page 
npm install
```

5. build vite app to static directory
```bash 
npm run build
```

6. run python server through manage.py with activated virtual environment
```bash
in main directory ImzGen/
python manage.py migrate
python manage.py runserver
```