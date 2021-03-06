import { verify } from 'jsonwebtoken';
import User from '../../models/users';
import config from '../../../config';
import { getToken } from '../auth';

async function ensureUser(ctx, next) {
  const token = getToken(ctx);

  if (!token) {
    ctx.throw(401);
  }

  let decoded = null;
  try {
    decoded = verify(token, config.token);
  } catch (err) {
    ctx.throw(401);
  }

  const user = await User.get(decoded.id).without('password');
  if (!user) {
    ctx.throw(401);
  }

  return next();
}

export default ensureUser;
