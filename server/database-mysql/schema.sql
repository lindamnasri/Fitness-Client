-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema fitness
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema fitness
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `fitness` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `fitness` ;

-- -----------------------------------------------------
-- Table `fitness`.`coach`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitness`.`coach` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `fitness`.`client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitness`.`client` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `weight` INT NOT NULL,
  `coach_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_client_coach_idx` (`coach_id` ASC) VISIBLE,
  CONSTRAINT `fk_client_coach`
    FOREIGN KEY (`coach_id`)
    REFERENCES `fitness`.`coach` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `fitness`.`program`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitness`.`program` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  `intensity` VARCHAR(45) NOT NULL,
  `duration` VARCHAR(45) NOT NULL,
  `frequency` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `fitness`.`ClientProgram`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fitness`.`ClientProgram` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  `intensity` VARCHAR(45) NOT NULL,
  `duration` VARCHAR(45) NOT NULL,
  `frequency` VARCHAR(45) NOT NULL,
  `client_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ClientProgram_client1_idx` (`client_id` ASC) VISIBLE,
  CONSTRAINT `fk_ClientProgram_client1`
    FOREIGN KEY (`client_id`)
    REFERENCES `fitness`.`client` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
