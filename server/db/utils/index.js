const createOrUpdate = async (Model, condition, data) => {
    try {
      const record = await Model.findOne({ where: condition });
      if (!record) {
        return Model.create(data || condition);
      }
  
      return record.update(data);
    } catch (err) {
      const errorMessage = `CREATE-OR-UPDATE, ${err}
  ---Model--- ${Model.name}
  ---Condition--- ${JSON.stringify(condition)},
  ---Data--- ${JSON.stringify({ ...data, raw: 'truncated' })}
  `;
      throw new Error(errorMessage);
    }
  };

  module.exports = { createOrUpdate }