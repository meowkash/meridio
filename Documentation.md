Card {
    props: {
        title: string,
        defaultMessage: string,
        cardHeight: float,
        renderStyle: string("vertical" or "horizontal"), 
        elementsToRender[]
    }
}

FileListItem {
    props: {
        fileName: string,
        fileSize: string
    }
}

UserAvatar {
    props: {
        userName,
        userIcon
    }
}

NearbyUsersList {
    props: {
        users[]: <UserAvatar>
    }
}

FileList {
    props: {
        files[]: <FileListItem>
    }
}