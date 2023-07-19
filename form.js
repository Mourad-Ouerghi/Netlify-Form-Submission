// const handleSubmit = (event) => {
//     event.preventDefault();
  
//     const myForm = event.target;
//     const formData = new FormData(myForm);
    
//     fetch("D:/work/Hi-Interns/Netlify-Form-Submission/form.html", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams(formData).toString(),
//     })
//       .then(() => console.log("Form successfully submitted"))
//       .catch((error) => alert(error));
//   };
  
  // document
  //   .querySelector("form")
  //   .addEventListener("submit", handleSubmit);
  const formSubmit = (event)=>{
    event.preventDefault();
    document
    .querySelector("form")
    .submit()
  }