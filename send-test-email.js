const { Resend } = require("resend");
const resend = new Resend("re_gy8XEJga_6sPUTqBmB8zbZqGLwWNNgSmM");

const scoreColor = (n) => n >= 90 ? "#0cce6b" : n >= 50 ? "#ffa400" : "#ff4e42";
const scoreLabel = (n) => n >= 90 ? "Great" : n >= 50 ? "Needs Work" : "Poor";

const scoreCard = (label, score, borderBottom = true) => `
    <div style="padding:14px 0;${borderBottom ? "border-bottom:1px solid #eee;" : ""}">
        <div style="font-size:13px;font-weight:600;color:#555;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;">${label}</div>
        <div style="font-size:28px;font-weight:800;color:${scoreColor(score)};margin-bottom:4px;">${score}<span style="font-size:14px;font-weight:400;color:#aaa;">/100</span></div>
        <div style="font-size:12px;color:${scoreColor(score)};font-weight:700;text-transform:uppercase;letter-spacing:.05em;">${scoreLabel(score)}</div>
    </div>
`;

const recs = [
    { fix: "Speed up your page so visitors don't leave before it loads.", explanation: "Your site takes too long to load, and most visitors leave within 3 seconds. Faster pages rank higher on Google and convert more visitors into customers." },
    { fix: "Add a short preview blurb that shows up in Google search results.", explanation: "Your page is missing the description snippet under your link in Google. Adding one tells Google what your page is about and gets more people to click through." },
    { fix: "Compress your images so the page loads faster.", explanation: "Large images are one of the biggest reasons websites load slowly. Compressing them can cut your load time in half without any visible quality difference." },
    { fix: "Add descriptions to your images so search engines know what they show.", explanation: "Images without descriptions are invisible to Google. Adding them helps your site show up in image search and improves your overall ranking." },
    { fix: "Add a social media preview image so shared links look professional.", explanation: "When someone shares your site on social media, there's no image preview. A preview image makes your brand look polished and gets more clicks." },
];

const recsHtml = recs.map((rec, i) => `
    <div style="display:flex;gap:16px;margin-bottom:20px;align-items:flex-start;">
        <div style="min-width:32px;height:32px;background:#385dd8;color:#fff;border-radius:2px;font-weight:700;font-size:14px;line-height:32px;text-align:center;margin-right:10px;">${i + 1}</div>
        <div>
            <p style="margin:0 0 4px;font-weight:600;color:#191a1c;font-size:15px;">${rec.fix}</p>
            <p style="margin:0;color:#555;font-size:14px;line-height:1.5;">${rec.explanation}</p>
        </div>
    </div>
`).join("");

const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:'Helvetica Neue',Arial,sans-serif;">
    <div style="max-width:600px;margin:40px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08);">
        <div style="background:#385dd8;padding:32px 40px;">
            <p style="margin:0;color:rgba(255,255,255,.7);font-size:13px;letter-spacing:.08em;text-transform:uppercase;font-weight:600;">Jelly Development</p>
            <h1 style="margin:8px 0 0;color:#fff;font-size:26px;font-weight:800;">Your Free Website Audit</h1>
            <p style="margin:8px 0 0;color:rgba(255,255,255,.8);font-size:14px;">https://jarodpeachey.com</p>
        </div>
        <div style="padding:36px 40px;">
            <p style="margin:0 0 24px;color:#191a1c;font-size:16px;">Hey Jarod,</p>
            <p style="margin:0 0 24px;color:#555;font-size:15px;line-height:1.6;">Here are the results from your free website audit. We found <strong>7 issues</strong> across your site — below are the scores and our top recommendations to help you fix them.</p>
            <p style="margin:0 0 32px;color:#555;font-size:15px;line-height:1.6;">Want to talk through what these mean for your site? <a href="https://calendly.com/jarod-peachey/30min" style="color:#385dd8;font-weight:600;">Book a free 30-minute call</a> and I'll walk you through exactly what needs to be done.</p>

            <div style="background:#f4f6fb;border-radius:10px;padding:8px 24px;margin-bottom:32px;">
                ${scoreCard("Performance", 62)}
                ${scoreCard("SEO", 91)}
                ${scoreCard("Mobile", 94, false)}
            </div>

            <h2 style="margin:0 0 20px;color:#191a1c;font-size:18px;font-weight:700;">Your Top 5 Recommendations</h2>
            ${recsHtml}

            <div style="background:#f4f6fb;border-radius:10px;padding:28px;margin-top:32px;text-align:center;">
                <p style="margin:0 0 8px;color:#191a1c;font-size:17px;font-weight:700;">Want these issues fixed?</p>
                <p style="margin:0 0 20px;color:#555;font-size:14px;line-height:1.6;">I'd love to hop on a free 30-minute call to walk through your results and talk about what your site needs. No pressure — just an honest conversation.</p>
                <a href="https://calendly.com/jarod-peachey/30min" style="display:inline-block;background:#385dd8;color:#fff;text-decoration:none;padding:14px 28px;border-radius:8px;font-weight:700;font-size:15px;">Book a Free Call →</a>
                <p style="margin:16px 0 0;color:#999;font-size:12px;">30 minutes. Free. No commitment.</p>
            </div>
        </div>
        <div style="padding:20px 40px;border-top:1px solid #eee;text-align:center;">
            <p style="margin:0;color:#aaa;font-size:12px;">
                Jelly Development · <a href="https://jellydevelopment.com" style="color:#aaa;">jellydevelopment.com</a><br>
                You're receiving this because you requested a free audit at jellydevelopment.com.<br>
                <a href="mailto:jarod@jellydevelopment.com?subject=Unsubscribe" style="color:#aaa;">Unsubscribe</a>
            </p>
        </div>
    </div>
</body>
</html>`;

resend.emails.send({
    from: "Jarod at Jelly Development <jarod@jellydevelopment.com>",
    to: "jarodpeachey@gmail.com",
    subject: "Your website audit results for https://jarodpeachey.com",
    html,
}).then(r => console.log("Result:", JSON.stringify(r))).catch(e => console.error("Error:", e.message));
