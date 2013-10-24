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
        $model = new LoginForm();
        $result = array('status' => 0);
        if (isset($_POST['user'])) {
            $model->attributes = $_POST['user'];
            if ($model->validate() && $model->login()) {
                $result = array('status' => 1);
            }else{
                $result['message'] = implode("\t",array_shift($model->getErrors()));
            }
        }
        echo json_encode($result);
    }

    public function actionRegister()
    {
        $model = new user();
        $result = array('status' => 0);

        if (isset($_POST['user'])) {
            $model->attributes = $_POST['user'];
            if ($model->register()) {
                $result = array('status' => 1);
            }else{
                $result['message'] = implode("\t",$model->getErrors());
            }
        }
        echo json_encode($result);
    }
}