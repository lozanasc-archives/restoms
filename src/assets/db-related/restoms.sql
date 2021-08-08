-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 02, 2021 at 02:49 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restoms`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(10) NOT NULL,
  `admin_user_name` varchar(200) NOT NULL,
  `admin_password` varchar(200) NOT NULL,
  `admin_full_name` varchar(250) NOT NULL,
  `admin_contact_no` varchar(200) NOT NULL,
  `admin_address` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_user_name`, `admin_password`, `admin_full_name`, `admin_contact_no`, `admin_address`) VALUES
(1, 'admin', 'admin', 'test_admin', '3435', 'test_admin');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(10) NOT NULL,
  `customer_name` varchar(200) NOT NULL,
  `customer_contact_no` varchar(200) NOT NULL,
  `customer_address` varchar(250) NOT NULL,
  `customer_table_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `customer_log`
--

CREATE TABLE `customer_log` (
  `log_id` int(11) NOT NULL,
  `log_name` varchar(200) NOT NULL,
  `log_contact_no` varchar(200) NOT NULL,
  `log_address` varchar(250) NOT NULL,
  `log_table` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer_log`
--

INSERT INTO `customer_log` (`log_id`, `log_name`, `log_contact_no`, `log_address`, `log_table`) VALUES
(1, 'Sean Christian Lozana', '0945547432', 'Candau-ay, Dumaguete City', 5);

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `item_id` int(10) NOT NULL,
  `item_name` varchar(200) NOT NULL,
  `item_price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`item_id`, `item_name`, `item_price`) VALUES
(1, 'Chicken Platter', 350),
(2, 'French Fries', 75);

-- --------------------------------------------------------

--
-- Table structure for table `order_basket`
--

CREATE TABLE `order_basket` (
  `order_id` int(10) NOT NULL,
  `order_name` varchar(200) NOT NULL,
  `order_desc` varchar(250) NOT NULL,
  `order_notes` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `order_session`
--

CREATE TABLE `order_session` (
  `order_session_id` int(10) NOT NULL,
  `order_session_total_qty` int(10) NOT NULL,
  `order_session_total_payable` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(10) NOT NULL,
  `product_name` varchar(200) NOT NULL,
  `product_description` varchar(250) NOT NULL,
  `product_stock_qty` int(10) NOT NULL,
  `product_price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_description`, `product_stock_qty`, `product_price`) VALUES
(1, 'Chicken Platter', 'A combination of fried Chicken Wings and Chicken Legs', 10, 350),
(2, 'French Fries', 'Fried potato shreds from freshly cut potatoes', 5, 75);

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `sales_id` int(10) NOT NULL,
  `total_sales` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `salesperson`
--

CREATE TABLE `salesperson` (
  `salesperson_id` int(10) NOT NULL,
  `salesperson_user_name` varchar(200) NOT NULL,
  `salesperson_password` varchar(200) NOT NULL,
  `salesperson_full_name` varchar(250) NOT NULL,
  `salesperson_contact_no` varchar(100) NOT NULL,
  `salesperson_address` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `salesperson`
--

INSERT INTO `salesperson` (`salesperson_id`, `salesperson_user_name`, `salesperson_password`, `salesperson_full_name`, `salesperson_contact_no`, `salesperson_address`) VALUES
(1, 'test', 'test', 'test_salesperson', '09455477432', 'Candau-ay, Testing');

-- --------------------------------------------------------

--
-- Table structure for table `table_list`
--

CREATE TABLE `table_list` (
  `table_id` int(11) NOT NULL,
  `table_availability` tinyint(1) NOT NULL,
  `table_seat_no` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `table_list`
--

INSERT INTO `table_list` (`table_id`, `table_availability`, `table_seat_no`) VALUES
(1, 0, 4),
(2, 0, 2),
(3, 0, 2),
(4, 0, 2),
(5, 0, 4),
(6, 0, 2),
(7, 0, 4),
(8, 0, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `customer_log`
--
ALTER TABLE `customer_log`
  ADD PRIMARY KEY (`log_id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `order_basket`
--
ALTER TABLE `order_basket`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `order_session`
--
ALTER TABLE `order_session`
  ADD PRIMARY KEY (`order_session_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`sales_id`);

--
-- Indexes for table `salesperson`
--
ALTER TABLE `salesperson`
  ADD PRIMARY KEY (`salesperson_id`);

--
-- Indexes for table `table_list`
--
ALTER TABLE `table_list`
  ADD PRIMARY KEY (`table_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer_log`
--
ALTER TABLE `customer_log`
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `item_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `order_basket`
--
ALTER TABLE `order_basket`
  MODIFY `order_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_session`
--
ALTER TABLE `order_session`
  MODIFY `order_session_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `sales_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `salesperson`
--
ALTER TABLE `salesperson`
  MODIFY `salesperson_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `table_list`
--
ALTER TABLE `table_list`
  MODIFY `table_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order_basket`
--
ALTER TABLE `order_basket`
  ADD CONSTRAINT `fk_product_id` FOREIGN KEY (`order_id`) REFERENCES `product` (`product_id`);

--
-- Constraints for table `order_session`
--
ALTER TABLE `order_session`
  ADD CONSTRAINT `fk_customer_id` FOREIGN KEY (`order_session_id`) REFERENCES `customer` (`customer_id`),
  ADD CONSTRAINT `fk_order_id` FOREIGN KEY (`order_session_id`) REFERENCES `order_basket` (`order_id`),
  ADD CONSTRAINT `fk_sales_id` FOREIGN KEY (`order_session_id`) REFERENCES `sales` (`sales_id`),
  ADD CONSTRAINT `fk_table_id` FOREIGN KEY (`order_session_id`) REFERENCES `table_list` (`table_id`);

--
-- Constraints for table `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `fk_salesperson_id` FOREIGN KEY (`sales_id`) REFERENCES `salesperson` (`salesperson_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
