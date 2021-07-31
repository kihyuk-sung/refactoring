const { statement, htmlStatement } = require('./statement.js');
const invoice = require('./invoices.json');
const plays = require('./plays.json');

test('statement test', () => {
    expect(statement(invoice, plays)).toBe(
`청구 내역 (고객명: BigCo)
  Hamlet: $650.00 (55석)
  As You Like It: $580.00 (35석)
  Othello: $500.00 (40석)
총액: $1,730.00
적립 포인트: 47점
`);
});


test('htmlStatement test', ()=> {
  expect(htmlStatement(invoice, plays)).toBe(
`<h1>청구 내역 (고객명: BigCo)</h1>
<table>
<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>
  <tr><td>Hamlet</td><td>(55석)</td><td>$650.00</td></tr>
  <tr><td>As You Like It</td><td>(35석)</td><td>$580.00</td></tr>
  <tr><td>Othello</td><td>(40석)</td><td>$500.00</td></tr>
</table>
<p>총액: <em>$1,730.00</em</p>
<p>적립 포인트: <em>47</em>점</p>
`
  );
});