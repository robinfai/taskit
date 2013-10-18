<?php
/**
 * ${NAMESPACE}\UserController
 *
 * @author Robin Fai <robinfai9@gmail.com>
 * @link http://widget.robinfai.com
 * @license http://www.yiiframework.com/license/
 * @version $Id: $ 13-10-18 下午11:52 robin.fai $
 *
 */
class UserController extends Controller
{
    public function actionLogin()
    {
        echo json_encode(array('status'=>true,'message'=>'123'));
    }

    public function actionRegister(){
        echo json_encode(array('status'=>true,'message'=>'123'));
    }
}