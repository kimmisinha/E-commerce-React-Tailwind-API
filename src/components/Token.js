let token = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890";
// let specialChars = "!@$%^&*()_+-=[]{}|;:,.<>?";

async function generateToken(length) {
  let result = "";
  const allCharacters = token + numbers;
  console.log(allCharacters.length)
  const charactersLength = allCharacters.length;
  for (let i = 0; i < length; i++) {
    result += allCharacters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}



export default generateToken