/*
Navicat MySQL Data Transfer

Source Server         : local_mysql5.6
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2016-03-10 14:50:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for li_user
-- ----------------------------
DROP TABLE IF EXISTS `li_user`;
CREATE TABLE `li_user` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `age` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of li_user
-- ----------------------------
INSERT INTO `li_user` VALUES ('48', 'test1', '12');
INSERT INTO `li_user` VALUES ('46', 'bbb', '2');
INSERT INTO `li_user` VALUES ('44', 'livi22', '12');
INSERT INTO `li_user` VALUES ('43', 'livisky', '112');
INSERT INTO `li_user` VALUES ('38', 'bbb', '12');
INSERT INTO `li_user` VALUES ('41', 'test', '123');
INSERT INTO `li_user` VALUES ('45', 'aaa', '1');
