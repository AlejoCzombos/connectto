export default function generateGmailLink({ to = null, cc = null, bcc = null, subject = null, body = null }) {
  const baseUrl = 'https://mail.google.com/mail/?view=cm&fs=1';
  const params = new URLSearchParams();

  if (to) params.append('to', to);
  if (cc) params.append('cc', encodeURIComponent(cc));
  if (bcc) params.append('bcc', encodeURIComponent(bcc));
  if (subject) params.append('su', subject);
  if (body) params.append('body', encodeURIComponent(body));

  return `${baseUrl}&${params.toString()}`;
}