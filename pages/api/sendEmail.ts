import nodemailer from "nodemailer";

export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    sendEmail(req.body.from, req.body.name, req.body.body)
      .then(() => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end("success");
      })
      .catch((e) => {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(e));
      });
  }
}

export const sendEmail = (from, name, body) => {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "huykhanh.id@gmail.com",
        pass: "KUU@kkk5680",
      },
    });
    var mainOptions = {
      from,
      to: "huykhanh.cse@gmail.com",
      subject: name,
      text: body,
      html:
        "<p>You have got a new message</b><ul><li>Username:" +
        name +
        "</li><li>Email:" +
        from +
        "</li><li>Content:" +
        body +
        "</li></ul>",
    };
    transporter.sendMail(mainOptions, function (err, info) {
      if (err) {
        reject(err);
      } else {
        console.log("Message sent: " + info.response);
        resolve("Success");
      }
    });
  });
};
