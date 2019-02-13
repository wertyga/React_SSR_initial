import renderHtml from './common/functions/renderHtml';

export default (req, res, next) => {
  res.send(renderHtml(req, res));
}