<?php

/**
 * This is the model class for table "user".
 *
 * The followings are the available columns in table 'user':
 * @property integer $id
 * @property string $username
 * @property string $email
 * @property string $password
 * @property integer $create_time
 * @property integer $update_time
 * @property integer $last_login_time
 * @property string $last_login_ip
 */
class User extends CActiveRecord
{

    public function encrypt($password){
        return md5($password);
    }

    public function register(){
        $this->password = $this->encrypt($this->password);
        $this->create_time = $this->last_login_time = $this->update_time = time();
        $this->last_login_ip = Yii::app()->request->getUserHostAddress();
        return $this->save();
    }



    /****************/
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return User the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'user';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('create_time, update_time, last_login_time', 'numerical', 'integerOnly'=>true),
			array('username, email, password, last_login_ip', 'length', 'max'=>255),
            array('username','unique'),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, username, email, password, create_time, update_time, last_login_time, last_login_ip', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'username' => 'Username',
			'email' => 'Email',
			'password' => 'Password',
			'create_time' => 'Create Time',
			'update_time' => 'Update Time',
			'last_login_time' => 'Last Login Time',
			'last_login_ip' => 'Last Login Ip',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
	 */
	public function search()
	{
		// Warning: Please modify the following code to remove attributes that
		// should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);
		$criteria->compare('username',$this->username,true);
		$criteria->compare('email',$this->email,true);
		$criteria->compare('password',$this->password,true);
		$criteria->compare('create_time',$this->create_time);
		$criteria->compare('update_time',$this->update_time);
		$criteria->compare('last_login_time',$this->last_login_time);
		$criteria->compare('last_login_ip',$this->last_login_ip,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}