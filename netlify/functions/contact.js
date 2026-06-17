exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ message: 'Method not allowed' }) };
  }
  try {
    const { name, email, message } = JSON.parse(event.body);
    if (!name || !email || !message) {
      return { statusCode: 400, body: JSON.stringify({ message: 'All fields are required' }) };
    }
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: 'Success! Your message was received.' }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ message: 'Server error' }) };
  }
};
