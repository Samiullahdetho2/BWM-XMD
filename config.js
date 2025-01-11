const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVW4vjRhb+L/VqT6z7xdCwkqWWLy3f5JucWUJJVZJl6+ZSybY89Muy5G0JyYR92DAEQl6Sp8Du0/4q/4SgdjfdMJlJRyBUlOqc851zvvPVO5BmUYEHuALtdyAn0QFSXC9plWPQBnoZBJiAJkCQQtAGo/5+SbgZGmWShapeMRwGjfF4oKn2TtlKe0NY3XLiiGOZ1L4B902Ql14c+Z9xSJlYkzHJukZDYMWqJZ+4ztzchLu+baRcNZBKw4z9M7847W7Afe0RRiRKQzPf4AQTGA9wNYYReR18S9uJjG+S0bKyOEl1bJjhKj07FJW3RMnFJV5TJ1yx+Up7HXwhXHpcd3+A04GznGwza2C6Az8uecafRds5NaA7RNH8NFwWV/hFFKYY9RBOaUSrV9c96qnlfF/EYZDHMt84SlGWZ57pWnd3SPeG51amcg2eTwNu8jrgaOraDO+Wg9Ydz8RRX3emy40h24PxaN1riC1LFFLdvFWsXfYS+Jg8cWX3V+o+sqyEHCBTRfK5dzbNuSiGjC4rUYEkoVPoM7OaTfo9RZu/su5ORhU0rmw6tedM5oQwK93hfuSy3XXj1D8yisohre/fWrr7DB/SknwOZX+5TRY7Gqw6p4kxs2PlsPI1U3VG49YUHwZm5BBXNzYiU/aT7XRzHkfibgp7ZD+5bYl3i1BK7en2ThEhNVFaDNeLjilo4c1DRjtc9RBos/dNQHAYFZRAGmVpvcfxTBNAdHCwTzB9KC9wYbVgAmTp6cI96BUttWIymK2jW0jcwLobxnLCncWsMUTFDWiCnGQ+LgqMulFBM1LZuChgiAvQ/vKhU3XSBCcZxf0IgTZQOZ5leEXiFVH6W/HFcQNpAfP8ixRT0AQByRIbgzYlJW6CBwNdVySdETu3jCFwrNZhdVVXFVbXZEFSBY2tU0yuQWdRggsKkxy0WZmXJF7mJfX+702Q4hO98qfOmmebIIhIQedpmccZRE/kevoJfT8rU+pUqd+pF5iA9ottTGmUhkWdWZlC4m+iA+7UeYB2AOMC3zcBwofIx7U/wG78/Ku4dKedpCfeFvFuqxVfHevKbbL0ekTwBE+WVPkN4mTxjcAi5Y0qKOgNK6ucrEieJ/AcqMtxHd3a5pNMCrJwvJh0F9N0IK3KocidR+ss6PTsqvfAhisFMMHoqcoe9HdlPst2OP0cQ1udssUNKqM14X2KukNNHXaKJXIN+4XfK7VA+92zXHYyVPvrLhbj8dKdgrpbdZyP2NDmxI8JkcL6NLi8/+c/Lh++/f/lww8/XT78578P74+/vr+8//rXy4/f/O9tevn+u9/epp/+vk0v77/+5fLvn/9V29SIH9tZY0GYwiguQBt0xmWvIm7XHBA+ko+WpZmh1gk18Nz+p3G+jgs8jryDNPdPLaqkJe6LPQMTTsW6NAx0o5hRd2Z5JSZ2rWYfO6kFdiw3OnK3VJTyWLEnZ4WRZ/XuIPLI4A7JqSc7+KgoXNUv9vpSq8rR4LzcHLlz2dp0g9Q4LstybNpDp5Fl1m58FldTZExu6mhXGr4MdlBHs+mCWXdXhtLCscdyHJKKJaebcElbqwxmm3m5EPY4SKRJSHrn9YTZVlMpEZKF1zqOWkLQUHqHteO1NmeqbFAxPxjaVWgehC5+vGCiRwm4kjaI8INeP7bzT9v+PD/MffOFj8cb4BMc1ZeFkciNuGsHctCX0wg7Gr9XD6sQb1fHiWzKS/OUyOn+3B+A+1oY8hjSICNJ3cgUkSxCoAliWFDtWQL+SFWkJkgqLc8dCumTcgCtfoxgAu5/B3UD+QzcCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

