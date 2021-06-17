const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db.select("*").from("accounts")
}

const getById = id => {
  // DO YOUR MAGIC
  return db.select("*")
  .from("accounts")
  .where({ id })
  .first()
}

const create =  async (account) => {
  // DO YOUR MAGIC
  const [id] = await db("accounts")
    .insert(account)

    const newAccount = await db("accounts")
  .where({ id })
  .first()

  return (id, newAccount)
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  await db("accounts")
    .update(account)
    .where({ id })
  return await db("accounts")
    .where({ id })
    .first()
}

const deleteById = async (id) => {
  // DO YOUR MAGIC
  return await db("accounts")
    .where({ id })
    .del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
