//const Share = require('../models').Share;
const Portfolio = require('../models').Portfolio;

module.exports = {
	list(req, res) {
		return Portfolio.findAll({
			order: [ [ 'createdAt', 'DESC' ] ]
		})
			.then((portfolios) => res.status(200).send(portfolios))
			.catch((error) => {
				res.status(400).send(error);
			});
	},

	getById(req, res) {
		return Portfolio.findByPk(req.params.id)
			.then((portfolio) => {
				if (!portfolio) {
					return res.status(404).send({
						message: 'Portfolio Not Found'
					});
				}
				return res.status(200).send(portfolio);
			})
			.catch((error) => res.status(400).send(error));
	},

	add(req, res) {
		return Portfolio.create({
			user_id: req.body.user_id,
			share_id: req.body.share_id,
			amounth: req.body.amounth
		})
			.then((portfolio) => res.status(201).send(portfolio))
			.catch((error) => res.status(400).send(error));
	},

	update(req, res) {
		return Portfolio.findByPk(req.params.id)
			.then((portfolio) => {
				if (!portfolio) {
					return res.status(404).send({
						message: 'Portfolio Not Found'
					});
				}
				return portfolio
					.update({
						user_id: req.body.user_id || portfolio.user_id,
						share_id: req.body.share_id || portfolio.share_id,
						amounth: req.body.amounth || portfolio.amounth
					})
					.then(() => res.status(200).send(portfolio))
					.catch((error) => res.status(400).send(error));
			})
			.catch((error) => res.status(400).send(error));
	},

	delete(req, res) {
		return Portfolio.findByPk(req.params.id)
			.then((portfolio) => {
				if (!portfolio) {
					return res.status(400).send({
						message: 'Portfolio Not Found'
					});
				}
				return portfolio
					.destroy()
					.then(() => res.status(204).send())
					.catch((error) => res.status(400).send(error));
			})
			.catch((error) => res.status(400).send(error));
	}
};
