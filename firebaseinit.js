var admin = require("firebase-admin");

var serviceAccount = {
  "type": "service_account",
  "project_id": "idkw-f0775",
  "private_key_id": "01b25842779d95ef18f6c2a36768b959bdeeb033",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCjzs7WVTufyubw\nWsnMOgRLmGEc9eM9X0Ctq7c7X+/vuhlFNC/+cT8PVKGBlfsumQQignNZzjTjgKFh\nDI199BDobuLTTq7ZQLL9Zxte4uTUBIqcZeJBS6lQQ08PAZS25o3q5AaJcB3y9jBQ\nGV9ClyPnbTLMiQcpDQxTadPWd8qLnHafXnKwS+clqbPdZyHL6b6YhHYWfejk1XgO\nZrgRZeHXDvr2aUgZnloO1OCJ6iJW7I6UGMQUtOVwUvKK7F3/n0uvG2WsfpW20bY3\nmMfMmanxrhIZ8Fm/T2Tp6bOkDvcY2/DSIediLAVgZuEiav5D8KqM7GcizYXQx5bA\nRr/G+yD/AgMBAAECggEAFdGywF7rCb5To5lcPt1NfCpIaTyhb6fT7C4uwnRld9eg\njRTF/czk2uxpdOLe6daM8/HPXpt2dQVJua0b3baYV/WJNh9Jb/vLu7Azt6BeXZVb\nRzjU+eCTpXLJwZRy1CgCqFKGQmFSQ+4iAlFW3H5YVHe5p//qmb+4sBWtF2iubIkM\nvuGcOVuj8zpw8mkUKQJHj2BvUZYjQ56ZdUEKwaSUckQpQFeq17Ak9may15oTY/r3\nq6noMO+kHh6myjLdo9ttpPVP3ulgM65nkNLX0c67+6tE3Rvykff0WrHyMunjQIyS\nq5LToYnXLSIUG/A0b3qpsHeTOr0pjojbfYY7DyGF8QKBgQDPga4vEBPB4rSUDOhN\n3GN/FURmrkbhOVCwbLzKleZkTAWg29BpLr822FE4PJlJXwlLKTCq/fHP6311iu1L\nltYP8Uh2pBdfktVZDbtdnFsuY87THPVp3wwO4SxUlf9pDe8nWTs3Nj2ULD7F/QgM\nJpiuLc0q/W1aaFla8fqfpZ+yMQKBgQDKFs0aYUZ91Ff2P9hMiR7MlII2rHyf5Jc8\n9/C/0Q+cE2nKHSagYmO3HdT0yiiKFIORlPFmB6ZFE+goJmie0KB8LHi/QSQ2l+wj\ntR8SOJ1yJLeCMSRLveC0Km0jjpBoY+AY3iJQ+B0MoaqkmIZ2i3WZmSousN4DRQ0t\n0iWxCIuKLwKBgQCi4AZJuJPZfsoA33TEELYkPRw4gJjwFd3o7SDu3uQ9W5KbZY5b\n0S6TrQ1rV911wtv3m/gwby2L5yrNxWNnDpktYFVhkoEqKoW95dJost67NepUuQlE\ntaewUjxKlIYq/p32Q8sAFloVYPlQzMCxUOZM6XR+Rve7m+ZvRTpUb1s/MQKBgQDG\nvk3Pl8L/lIk9P+S0wFVt1M+KfW/Cv8iMyToXKr8zO1Ra1Phb2uc9+zSn2PitcydB\nUT1mnjdC0CUM91kEdyCdfg7x6Fp45kfxhfqcrNkKnFlszG9pnb8S8HaM9XPHdhG5\n4xvUjW3kMknjvazfgJ+TAzKc4Iw2ov4nBfjTdhflOQKBgQCsDDWsx6DZYjDFiUIU\nfFxB5J3JhA9UthHGVJiHSgo2fMJyVk/0HZhFhdNQm4WjD1PvervOnOkpvwNINI3k\nVYs8zB0TJ+6nw486yPkECz92k1NcBhFGBj0cEmXDlihCiJULrG7dfeGFrKthmY2y\nX9Vqw7iPzbQTfmtD/7RTAh/ufA==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-k18ub@idkw-f0775.iam.gserviceaccount.com",
  "client_id": "116450876758729374138",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-k18ub%40idkw-f0775.iam.gserviceaccount.com"
}


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://idkw-f0775-default-rtdb.firebaseio.com"
});



module.exports = {
    db: admin.database()
}
