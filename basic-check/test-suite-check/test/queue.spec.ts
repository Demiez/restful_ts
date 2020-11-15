import { expect, should as chaiShould } from 'chai';
import { Queue } from '../src/app';

const should = chaiShould();

describe('Testing Queue', () => {
  it('should be able to be initialized without an initializer', () => {
    const q = new Queue<number>();
    expect(q.size()).to.equal(0);
  });

  it('should be able to be initalized with an initializer', () => {
    const q = new Queue<number>([1, 2, 3, 4, 5]);
    should.exist(q);
    q.size().should.be.equal(5);
  });

  it('should be able to add a new element after initialization', () => {
    const q = new Queue<number>([1, 2, 3, 4]);
    q.push(5);
    expect(q.size()).to.equal(5);
    expect(q.pop()).to.equal(1);
  });

  it('should be able to get the first element', () => {
    const q = new Queue<number>([1, 2, 3, 4, 5]);
    const result = q.pop() as number;
    result.should.be.a('number');
    result.should.equal(1);
  });

  it('should check if the queue is empty when there is no data there', () => {
    const q = new Queue<number>([]);
    expect(q.isEmpty()).to.equal(true);
  });

  it('should check if the queue is not empty when there is data there', () => {
    const q = new Queue<number>([1]);
    expect(q.isEmpty()).to.equal(false);
  });
});
