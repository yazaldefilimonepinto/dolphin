import { Token } from "token";
import { Expression } from "./base";

export class Identifier implements Expression {
  private token: Token;
  public value: string;
  constructor(token: Token) {
    this.token = token;
  }

  tokenLiteral(): string {
    return this.token.literal;
  }

  expressionNode(): void {
    throw new Error("Method not implemented.");
  }
  toString(): string {
    return this.value;
  }
}
