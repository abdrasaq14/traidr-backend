import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/database.config'

class Customer extends Model {
  public id!: string
  public FirstName!: string
  public LastName!: string
  public otp!: string
  public otpExpirationTime!: Date
  public email!: string
  public isVerified!: boolean
  public password!: string
  public phoneNumber!: number
  public resetPasswordExpiration!: Date | null
  public resetPasswordToken!: string | null
}

Customer.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    otp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    otpExpirationTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    resetPasswordExpiration: {
      type: DataTypes.DATE,
      allowNull: true
    },
    resetPasswordToken: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'Customer'
  }
)

export default Customer
