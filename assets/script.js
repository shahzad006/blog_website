
// Mobile nav toggle
const toggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}



// assets/script.js

function openArticle(id) {
  const article = articles[id];
  if (!article) return;

  const container = document.getElementById("article-container");
  container.innerHTML = `
    <h2 id="article-title">${article.title}</h2>
    ${article.content}
  `;

  document.getElementById("article-modal").style.display = "block";
  document.getElementById("article-modal").setAttribute("aria-hidden", "false");
}

function closeArticle() {
  document.getElementById("article-modal").style.display = "none";
  document.getElementById("article-modal").setAttribute("aria-hidden", "true");
}

// Mobile nav toggle
document.querySelector(".mobile-toggle")?.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});


// Modal logic for blog read-more buttons
function openArticle(id) {
  const modal = document.getElementById('article-modal');
  const container = document.getElementById('article-container');
  if (!modal || !container) return;
  const article = articles.find(a => a.id === id);
  if (!article) return;
  container.innerHTML = `
    <h3>${article.title}</h3>
    <div class="meta">${article.date} • ${article.read} min read • <span class="badge">${article.tag}</span></div>
    <div class="article-body">${article.html}</div>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeArticle() {
  const modal = document.getElementById('article-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Contact form (demo only)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(contactForm).entries());
    const out = document.getElementById('contact-output');
    if (out) {
      out.textContent = `Thanks, ${data.name}! We received your message and will reply to ${data.email}.`;
    }
    contactForm.reset();
  });
}

const articles = [
  {
    "id": "savings-account",
    "title": "What is a Savings Account?",
    "date": "August 24, 2025",
    "read": 4,
    "tag": "Basics",
    "excerpt": "A savings account helps you store money securely and earn interest while keeping funds accessible.",
    "html": "\n      <p>A savings account is a deposit account that pays interest on your balance while keeping funds accessible through ATM cards, mobile apps, and branch banking.</p>\n      <h4>Key benefits</h4>\n      <ul>\n        <li>Earn interest on idle cash</li>\n        <li>Withdrawals via ATM, branch, or app</li>\n        <li>Often no minimum balance for student/youth accounts</li>\n      </ul>\n      <p>Tip: Compare interest rates, fees, and digital features when choosing a bank.</p>\n    "
  },
  {
    "id": "current-account",
    "title": "Current Accounts Explained",
    "date": "August 24, 2025",
    "read": 3,
    "tag": "Basics",
    "excerpt": "Designed for frequent transactions\u2014ideal for businesses and freelancers.",
    "html": "\n      <p>Current accounts are optimized for high transaction volumes and usually do not pay interest. They often include cheque books, merchant services, and bulk payments.</p>\n      <p>Common fees include monthly maintenance, per-transaction charges, and cash-handling fees.</p>\n    "
  },
  {
    "id": "fixed-deposits",
    "title": "Fixed Deposits vs. Term Deposits",
    "date": "August 24, 2025",
    "read": 5,
    "tag": "Savings",
    "excerpt": "Lock your funds for a set term to earn higher interest than standard savings accounts.",
    "html": "\n      <p>Fixed deposits (FDs) pay a fixed rate for a fixed term (e.g., 3\u201336 months). Early withdrawal may reduce your return due to penalties.</p>\n      <ul>\n        <li>Higher, predictable returns</li>\n        <li>Low risk compared to market products</li>\n        <li>Penalty for premature encashment</li>\n      </ul>\n    "
  },
  {
    "id": "islamic-banking",
    "title": "Islamic Banking: The Basics",
    "date": "August 24, 2025",
    "read": 6,
    "tag": "Islamic",
    "excerpt": "Shariah-compliant banking avoids interest (riba) and emphasizes asset-backed financing.",
    "html": "\n      <p>Islamic banking uses contracts like <em>Murabaha</em>, <em>Musharakah</em>, and <em>Ijara</em> to structure financing without interest. Returns are linked to real assets and profit-sharing.</p>\n      <p>Check for a Shariah Board and transparent product disclosures when choosing a bank.</p>\n    "
  },
  {
    "id": "credit-score",
    "title": "Credit Scores & Why They Matter",
    "date": "August 24, 2025",
    "read": 4,
    "tag": "Credit",
    "excerpt": "Your credit history affects loan approvals, limits, and pricing.",
    "html": "\n      <p>A credit score summarizes your borrowing and repayment behavior. Timely payments, low utilization, and a stable history help you qualify for better rates.</p>\n      <p>Pro tip: Always pay at least the minimum due on time, every time.</p>\n    "
  },
  {
    "id": "mobile-safety",
    "title": "Mobile Banking Safety Tips",
    "date": "August 24, 2025",
    "read": 3,
    "tag": "Security",
    "excerpt": "Secure your accounts with strong passwords, biometrics, and alerts.",
    "html": "\n      <ul>\n        <li>Enable biometric login and two-factor authentication (2FA)</li>\n        <li>Never share OTPs or PINs</li>\n        <li>Update apps and OS regularly</li>\n        <li>Use secure Wi\u2011Fi or your cellular network</li>\n      </ul>\n    "
  },
  {
    "id": "cards-explained",
    "title": "ATM, Debit, and Credit Cards",
    "date": "August 24, 2025",
    "read": 5,
    "tag": "Cards",
    "excerpt": "Understand how different cards work to avoid fees and maximize benefits.",
    "html": "\n      <p>ATM cards allow cash withdrawals. Debit cards spend money directly from your account. Credit cards extend a line of credit with a billing cycle and due date.</p>\n      <p>Avoid interest by paying your statement in full before the due date.</p>\n    "
  },
  {
    "id": "payments-ibft-rtgs",
    "title": "IBFT vs. RTGS: Transfers in Pakistan",
    "date": "August 24, 2025",
    "read": 4,
    "tag": "Payments",
    "excerpt": "Choose IBFT for small, instant transfers; RTGS for large-value, same\u2011day settlement.",
    "html": "\n      <p><strong>IBFT</strong> (Interbank Funds Transfer) is instant and best for retail amounts. <strong>RTGS</strong> (Real-Time Gross Settlement) is for large-value transactions with cut\u2011off times.</p>\n      <ul><li>IBFT: 24/7 availability; small fees</li><li>RTGS: Bank business hours; higher limits</li></ul>\n    "
  },
  {
    "id": "open-account-checklist",
    "title": "Opening a Bank Account: Checklist",
    "date": "August 24, 2025",
    "read": 3,
    "tag": "How\u2011to",
    "excerpt": "CNIC, proof of address, source of income, and initial deposit\u2014here\u2019s what you\u2019ll need.",
    "html": "\n      <ul>\n        <li>Valid CNIC/Passport</li>\n        <li>Proof of address (utility bill or rental agreement)</li>\n        <li>Source of income (salary slip, business proof, or student letter)</li>\n        <li>Initial deposit as per bank policy</li>\n      </ul>\n      <p>For minors and students, banks often offer special account variants.</p>\n    "
  }
];