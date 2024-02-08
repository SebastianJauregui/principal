module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "actionPlanEvidence",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      actionPlanId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "action_plan",
          key: "id",
        },
        field: "action_plan_id",
      },
      evidenceTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "evidence_type",
          key: "id",
        },
        field: "evidence_type_id",
      },
      required: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
      paramsConfiguration: {
        type: DataTypes.JSON,
        allowNull: false,
        field: "params_configuration",
      },
      description: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      deleteTime: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "delete_time",
      },
    },
    {
      sequelize,
      tableName: "action_plan_evidence",
      timestamps: true,
      updatedAt: "update_time",
      createdAt: "create_time",
      paranoid: true,
      deletedAt: "deleteTime",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "fk_action_plan_evidence_action_plan_idx",
          using: "BTREE",
          fields: [{ name: "action_plan_id" }],
        },
        {
          name: "fk_action_plan_evidence_evidence_type_idx",
          using: "BTREE",
          fields: [{ name: "evidence_type_id" }],
        },
      ],
    }
  );
};
