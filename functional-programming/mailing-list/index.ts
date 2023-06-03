const mailingList: string[] = [];

// Action
const submitForm = (_: string[]) => undefined;

const addListLast = (mailList: string[], email: string) => {
  return [...mailList, email];
}

const submitFormHandler = (event: HTMLFormElement) => {
  const form = event.currentTarget;
  const email = form.elements['email'].value;
  const newEmailList = addListLast(mailingList, email);
  submitForm(newEmailList);
}

