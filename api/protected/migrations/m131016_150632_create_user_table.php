<?php

class m131016_150632_create_user_table extends CDbMigration
{
	public function up()
	{
        $this->createTable('user',array(
            'id'=>'pk',
            'username'=>'string',
            'email'=>'string',
            'password'=>'string',
            'create_time'=>'int',
            'update_time'=>'int',
            'last_login_time'=>'int',
            'last_login_ip'=>'string',
        ));
        return true;
	}

	public function down()
	{
		$this->dropTable('user');
		return true;
	}

	/*
	// Use safeUp/safeDown to do migration with transaction
	public function safeUp()
	{
	}

	public function safeDown()
	{
	}
	*/
}