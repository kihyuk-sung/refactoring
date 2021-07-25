const statement = require('./statement.js');
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
