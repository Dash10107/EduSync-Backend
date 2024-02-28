from transformers import GPT2Tokenizer, TFGPT2LMHeadModel
import sys

def generate_response(prompt):
    try:
        # Load pre-trained GPT-2 model and tokenizer
        model_name = "gpt2"  # Replace with the model you want to use
        tokenizer = GPT2Tokenizer.from_pretrained(model_name)
        model = TFGPT2LMHeadModel.from_pretrained('gpt2')

        # Tokenize and generate a response
        input_ids = tokenizer.encode(prompt, return_tensors="pt")
        output = model.generate(input_ids, max_length=100, num_return_sequences=1, no_repeat_ngram_size=2)

        # Decode and return the generated response
        response = tokenizer.decode(output[0], skip_special_tokens=True)
        
        return  response

    except Exception as e:
        return str(e)

if __name__ == "__main__":
    # Read the prompt from command-line arguments
    prompt = sys.argv[1] if len(sys.argv) > 1 else ""

    # Generate the response
    result = generate_response(prompt)

    # Print the result to stdout
    print(result)
