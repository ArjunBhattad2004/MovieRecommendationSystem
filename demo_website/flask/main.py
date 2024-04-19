from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api', methods=['POST'])
def process_input():
    # Assuming the input is sent as form data
    input_data = request.form.get('input')

    # Perform any processing here if needed

    # Return response
    response = {"message": "done"}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)