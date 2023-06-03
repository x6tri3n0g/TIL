const mailingList: string[] = [];

// Action
const submitForm = (_: string[]) => undefined;

const addListLast = (email: string) => {
  return [...mailingList, email];
}

const submitFormHandler = (event: HTMLFormElement) => {
  const form = event.currentTarget;
  const email = form.elements['email'].value;
  const newEmailList = addListLast(email);
  submitForm(newEmailList);
}

