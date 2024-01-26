import { Router } from 'express';

export const MagicalRoute = Router();

MagicalRoute.get('/magical', (req, res) => {
  res.send("Wooooohaw!! There is Nothing Here but it feel fucking magical. It's The Magical Nothing!!");
});