// class env loads env vars 
export class Env {
  public static PORT = process.env.PORT || 800;
  public static dbURL = process.env.dbURL || '';
  public static dbNAME = process.env.dbNAME || '';
  public static NODE_ENV = process.env.NODE_ENV || 'production';
  public static JWTSECRECT = process.env.JWTSECRECT || 'secret'
  public static HASHSERCET = process.env.HASHSERCET || 'secret'

}