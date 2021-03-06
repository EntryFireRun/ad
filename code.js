location.href="http://playentry.org/";
fetch("https://playentry.org/graphql", {

  "headers": {

    "accept": "*/*",

    "accept-language": "ko",

    "content-type": "application/json",

    "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",

    "sec-ch-ua-mobile": "?0",

    "sec-fetch-dest": "empty",

    "sec-fetch-mode": "cors",

    "sec-fetch-site": "same-origin"

  },

  "referrer": "https://playentry.org/community/entrystory/list?sort=created&term=all",

  "referrerPolicy": "strict-origin-when-cross-origin",

  "body": "{\"query\":\"mutation CREATE_ENTRYSTORY($content: String, $text: String, $image: String, $sticker: String, $cursor: String) {\\n  createEntryStory(\\n    content: $content\\n    text: $text\\n    image: $image\\n    sticker: $sticker\\n    cursor: $cursor\\n  ) {\\n    warning\\n    discuss {\\n      id\\n      title\\n      content\\n      seContent\\n      created\\n      commentsLength\\n      likesLength\\n      visit\\n      category\\n      prefix\\n      groupNotice\\n      user {\\n        id\\n        nickname\\n        username\\n        profileImage {\\n          id\\n          name\\n          label {\\n            ko\\n            en\\n            ja\\n            vn\\n            __typename\\n          }\\n          filename\\n          imageType\\n          dimension {\\n            width\\n            height\\n            __typename\\n          }\\n          trimmed {\\n            filename\\n            width\\n            height\\n            __typename\\n          }\\n          __typename\\n        }\\n        status {\\n          following\\n          follower\\n          __typename\\n        }\\n        description\\n        role\\n        __typename\\n      }\\n      images {\\n        filename\\n        imageUrl\\n        __typename\\n      }\\n      progress\\n      thumbnail\\n      reply\\n      bestComment {\\n        id\\n        user {\\n          id\\n          nickname\\n          username\\n          profileImage {\\n            id\\n            name\\n            label {\\n              ko\\n              en\\n              ja\\n              vn\\n              __typename\\n            }\\n            filename\\n            imageType\\n            dimension {\\n              width\\n              height\\n              __typename\\n            }\\n            trimmed {\\n              filename\\n              width\\n              height\\n              __typename\\n            }\\n            __typename\\n          }\\n          status {\\n            following\\n            follower\\n            __typename\\n          }\\n          description\\n          role\\n          __typename\\n        }\\n        content\\n        created\\n        removed\\n        blamed\\n        commentsLength\\n        likesLength\\n        isLike\\n        hide\\n        image {\\n          id\\n          name\\n          label {\\n            ko\\n            en\\n            ja\\n            vn\\n            __typename\\n          }\\n          filename\\n          imageType\\n          dimension {\\n            width\\n            height\\n            __typename\\n          }\\n          trimmed {\\n            filename\\n            width\\n            height\\n            __typename\\n          }\\n          __typename\\n        }\\n        sticker {\\n          id\\n          name\\n          label {\\n            ko\\n            en\\n            ja\\n            vn\\n            __typename\\n          }\\n          filename\\n          imageType\\n          dimension {\\n            width\\n            height\\n            __typename\\n          }\\n          trimmed {\\n            filename\\n            width\\n            height\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      blamed\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\",\"operationName\":\"CREATE_ENTRYSTORY\",\"variables\":{\"content\":\"\"}}",

  "method": "POST",

  "mode": "cors",

  "credentials": "include"

});
