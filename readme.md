# QuickLink | Full-Stack URL Shortener & Analytics Dashboard

A lightweight, modern, full-stack URL shortener application built using **Node.js**, **Express**, and **MongoDB Atlas**. The application features an interactive, single-page web dashboard styled with **Tailwind CSS** that allows users to seamlessly generate short URLs, experience automatic redirection, and track real-time visitor click analytics with timestamps.

## 🚀 Features

* **Instant URL Shortening:** Generates a unique, collision-resistant short ID using the `shortid` package.
* **Automatic Browser Redirection:** Seamlessly routes users from a clean short link (`/:shortId`) to the original destination website.
* **Real-Time Performance Analytics:** Dynamically logs visitor access counts and records historical interaction timestamps inside MongoDB.
* **Responsive UI:** A dark-themed, intuitive single-page frontend dashboard built with HTML5 and Tailwind CSS.
* **Security Minded:** Implements `dotenv` configuration architecture to protect sensitive cloud database credentials from being exposed in public version control.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, JavaScript (Fetch API), Tailwind CSS (via CDN)
* **Backend Runtime:** Node.js
* **Web Framework:** Express.js
* **Database:** MongoDB Atlas (Cloud)
* **Object Modeling (ODM):** Mongoose
* **Key Packages:** `shortid` (Unique ID generation), `dotenv` (Environment variables management)

---

## 📋 API Endpoints

### 1. URL Controller Rules
| HTTP Method | Endpoint | Description | Request Body / Parameters |
| :--- | :--- | :--- | :--- |
| **POST** | `/url` | Generates a new short ID for a given long URL | `{ "redirectURL": "https://example.com" }` |
| **GET** | `/url/analytics/:shortId` | Fetches click count and full timestamp history array | Requires `shortId` parameter |

### 2. Base Redirector Routing
| HTTP Method | Endpoint | Description | Behavior |
| :--- | :--- | :--- | :--- |
| **GET** | `/:shortId` | Looks up short ID, appends a click timestamp, and redirects | `302 Redirect` to destination URL |

---

## ⚙️ Local Installation & Setup Guide

Follow these steps to clone, configure, and spin up the application on your local workstation:

### 1. Clone the Repository
```bash
git clone [https://github.com/samarth5106/URL_Shortener.git](https://github.com/samarth5106/URL_Shortener.git)
cd URL_Shortener