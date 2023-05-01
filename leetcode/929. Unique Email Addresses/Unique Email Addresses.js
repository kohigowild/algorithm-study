/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    const set = new Set();
    emails.forEach((email) => {
        email = email.split("@");
        email[0] = email[0].split("+")[0].replace(/\./g, "");
        set.add(email.join("@"));
    });
    return set.size;
};
