FROM tensorflow/tensorflow 

# make a dir where we store all our source code
RUN mkdir -p /app

# Copy all source code
WORKDIR /app
COPY . .

# Install Python requirments
RUN pip install -r requirements.txt

# expose port 3000
# EXPOSE $PORT

# set node server as entrypoint
CMD flask run --host=0.0.0.0 --port=$PORT