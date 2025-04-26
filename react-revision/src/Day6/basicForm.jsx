import { useState } from "react";
import { useFormStatus } from "react-dom";

const FeedBackForm = () => {

    //but useState() returns an array, the first element is the current state value and the second element is a function that updates the state value.
    //The useState() function takes an initial state value as an argument and returns an array with two elements: the current state value and a function to update that value.
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [rating, setRating] = useState(0);
    const [recommend, setRecommend] = useState(false);
    const [message, setMessage] = useState("");
    
    const { pending } = useFormStatus();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", { name, email, country, rating, recommend, message });
    }

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>FeedBack Form</h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px", margin: "auto" }}>
                <label htmlFor="name">Name:</label>
                <input type='text' id="name" value={name} name="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} required />

                <br />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} name="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />

                <br />

                <label htmlFor="country">Country</label>
                <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="Pakistan">Pakistan</option>
                    <option value="India">India</option>
                    <option value="Bangladesh">Bangladesh</option>
                </select>

                <p>Selected Country: {country}</p>

                <br />

                <label htmlFor="rating">Rating</label>
                <input type="number" id="rating" value={rating} name="rating" onChange={(e) => setRating(e.target.value)} />

                <br />

                <label htmlFor="recommend">Would you recommend us?</label>
                <input type="checkbox" id="recommend" name="recommend" checked={recommend} onChange={(e) => setRecommend(e.target.checked)} />

                <br />
               
                <textarea 
                    id="text" name="text" value={message} rows="6" cols="50" placeholder="Enter your detailed feedback"
                     onChange={(e)=>setMessage(e.target.value)}></textarea>

                <button type="submit" disabled={pending} style={{ marginTop: "10px", padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>

                    {pending ? "Submitting..." : "Submit"}
                </button>

            </form>

        </div>
    )
}

export default FeedBackForm;