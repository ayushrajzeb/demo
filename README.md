<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
 
  <h1> Book Recommendation Chatbot using IBM Watson Assistant</h1>

  <p>Welcome! This project helps you build a <strong>Book Recommendation Chatbot</strong> that suggests books based on <em>genre</em>, <em>author</em>, or <em>mood</em> using <strong>IBM Watson Assistant</strong>.</p>

  <div class="section">
    <h2> Project Overview</h2>
    <p>This chatbot engages users in a friendly conversation, understands their reading preferences, and recommends books tailored just for them. It can be easily added to any website or web page.</p>
  </div>

  <div class="section">
    <h2> Features</h2>
    <ul>
      <li>Conversational chatbot powered by IBM Watson Assistant</li>
      <li>Recommends books by <strong>genre</strong>, <strong>author</strong>, or <strong>mood</strong></li>
      <li>Easy to set up and train with intents and entities</li>
      <li>Simple HTML integration for your own website</li>
      <li>Fully customizable and extendable</li>
    </ul>
  </div>

  <div class="section">
    <h2> Tools & Technologies</h2>
    <ul>
      <li>IBM Watson Assistant</li>
      <li>IBM Cloud</li>
      <li>HTML, CSS (for website UI)</li>
      <li>JSON / CSV (for training data)</li>
      <li>Web Widget / Slack for testing</li>
    </ul>
  </div>

  <div class="section">
    <h2> Project Structure</h2>
    <pre>
/Book-Recommendation-Chatbot
│
├── index.html               # Website UI with chatbot integrated
├── Book-Recommendation-Chatbot.pptx # Project presentation
├── Book-Recommendation-Chatbot.docx # Detailed project report
├── README.html              # This README page
    </pre>
  </div>

  <div class="section">
    <h2> Step-by-Step Setup Guide</h2>
    <ol>
      <li><strong>Sign up for IBM Cloud:</strong> <br>
        <a href="https://cloud.ibm.com/" target="_blank">Create an IBM Cloud account</a> and log in.
      </li>
      <li><strong>Create Watson Assistant Service:</strong><br>
        In your IBM Cloud dashboard, create a new <em>Watson Assistant</em> instance.
      </li>
      <li><strong>Create an Assistant:</strong><br>
        Go to Watson Assistant and create a new Assistant project (example name: <code>BookBuddy</code>).
      </li>
      <li><strong>Add a Dialog Skill:</strong><br>
        - Define <strong>Intents</strong>: <code>#greet</code>, <code>#goodbye</code>, <code>#recommend_book</code>, <code>#provide_genre</code>, <code>#provide_author</code>, <code>#provide_mood</code>, <code>#thanks</code>.<br>
        - Define <strong>Entities</strong>: <code>@genre</code>, <code>@author</code>, <code>@mood</code>.<br>
        - Create a Dialog Flow to capture user input and respond.
      </li>
      <li><strong>Integrate with Website:</strong><br>
        Copy the integration script from IBM Assistant and paste it into your <code>index.html</code>. <br>
        Example:
        <pre><code>&lt;script&gt;
  window.watsonAssistantChatOptions = {
    integrationID: "YOUR_INTEGRATION_ID",
    region: "YOUR_REGION",
    serviceInstanceID: "YOUR_INSTANCE_ID",
    onLoad: async (instance) =&gt; { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
&lt;/script&gt;</code></pre>
      </li>
      <li><strong>Test the Chatbot:</strong><br>
        Open your website, interact with the bot, and make sure it responds correctly.
      </li>
    </ol>
  </div>

  <div class="section">
    <h2> How It Works</h2>
    <p>
      1️ The user greets the chatbot <br>
      2️ The bot asks about reading preferences (genre, author, mood) <br>
      3️ The bot suggests suitable books <br>
      4️ The conversation ends politely
    </p>
  </div>

  <div class="section">
    <h2> Example Use Cases</h2>
    <ul>
      <li>Library or bookstore website assistant</li>
      <li>Online book club or community</li>
      <li>Personal reading assistant on blogs</li>
    </ul>
  </div>

  <div class="section">
    <h2> Future Enhancements</h2>
    <ul>
      <li>Connect with live book APIs like Google Books</li>
      <li>Track user reading history and ratings</li>
      <li>Offer multi-language support</li>
    </ul>
  </div>

  <div class="section">
    <h2> Credits</h2>
    <p>Developed by <strong>Ayush Raj</strong><br>
    Vivekananda Global University, Jaipur</p>
  </div>
