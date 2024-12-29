// Create a Canvas:
const canvas = document.getElementById("canvas");
const alertBox = document.getElementById("alert");
const canvasBox = document.getElementById("canvas-div");
const ctx = canvas.getContext("2d");
const gamerItems = document.querySelectorAll(".gamer");
const userTitle = document.querySelectorAll(".user-title");

let width = 600;
let height = 600;
let radius = 20;

let whiteColor = "#FFFFFF";

let areaActiveX = [0, 0];
let areaActiveY = [0, 0];

let widthForRect = width / 2.5;
let heightForRect = height / 2.5;

let widthForRectInMiddle = width / 5;
let heightForRectInMiddle = height / 5;

canvas.width = width;
canvas.height = height;
let activeUser = "1";

let borderWidthForRect = 40;

canvasBox.style = `width: ${width}px;  height: ${height}px`;

ctx.fillRect(0, 0, widthForRect, heightForRect);

ctx.fillRect(width - widthForRect, 0, widthForRect, heightForRect);

ctx.fillRect(0, height - heightForRect, widthForRect, heightForRect);

ctx.fillRect(
    width - widthForRect,
    height - heightForRect,
    widthForRect,
    heightForRect
);

const users = {
    user1: {
        team: "blue",
        color: "#0000ff",
        trans: "25",
        colorWithOpc: "#0000FF80",
        firstDir: "top",

        borderX: 0 + borderWidthForRect / 2,
        borderY: height - heightForRect + borderWidthForRect / 2,
        gamers: {
            gamer1: {
                x: 0,
                y: 0,
                inHome: true,
                htmlId: "gamer1-user1",
                dir: "top",
                oldDir: false,
                passAreas: [],
                steps: 0,
                isWin: false,
            },
            gamer2: {
                x: 0,
                y: 0,
                inHome: true,
                htmlId: "gamer2-user1",
                dir: "top",
                oldDir: false,
                passAreas: [],
                steps: 0,
                isWin: false,
            },
            gamer3: {
                x: 0,
                y: 0,
                inHome: true,
                htmlId: "gamer3-user1",
                dir: "top",
                oldDir: false,
                passAreas: [],
                steps: 0,
                isWin: false,
            },
            gamer4: {
                x: 0,
                y: 0,
                inHome: true,
                htmlId: "gamer4-user1",
                dir: "top",
                oldDir: false,
                passAreas: [],
                steps: 0,
                isWin: false,
            },
        },
    },

    user2: {
        team: "yellow",
        color: "#ffff00",
        trans: "25",
        colorWithOpc: "#ffff0080",
        firstDir: "left",
        borderX: width - widthForRect + borderWidthForRect / 2,
        borderY: height - heightForRect + borderWidthForRect / 2,

        gamers: {
            gamer1: {
                x: 0,
                y: 0,
                inHome: true,
                htmlId: "gamer1-user2",
                dir: "left",
                oldDir: false,
                passAreas: [],
                steps: 0,
                isWin: false,
            },
            gamer2: {
                x: 0,
                y: 0,
                inHome: true,
                htmlId: "gamer2-user2",
                dir: "left",
                oldDir: false,
                passAreas: [],
                steps: 0,
                isWin: false,
            },
            gamer3: {
                x: 0,
                y: 0,
                inHome: true,
                htmlId: "gamer3-user2",
                dir: "left",
                oldDir: false,
                passAreas: [],
                steps: 0,
                isWin: false,
            },
            gamer4: {
                x: 0,
                y: 0,
                inHome: true,
                htmlId: "gamer4-user2",
                dir: "left",
                oldDir: false,
                passAreas: [],
                steps: 0,
                isWin: false,
            },
        },
    },
    user3: {
        team: "green",
        color: "#00ff00",
        trans: "25",
        colorWithOpc: "#00FF0080",
        firstDir: "bottom",
        borderX: width - widthForRect + borderWidthForRect / 2,
        borderY: 0 + borderWidthForRect / 2,

        gamers: {
            gamer1: {
                x: 0,
                y: 0,
                inHome: true,
                htmlId: "gamer1-user3",
                dir: "bottom",
                oldDir: false,
                passAreas: [],
                steps: 0,
                isWin: false,
            },
            gamer2: {
                x: 0,
                y: 0,
                inHome: true,
                htmlId: "gamer2-user3",
                dir: "bottom",
                oldDir: false,
                passAreas: [],
                steps: 0,
                isWin: false,
            },
            gamer3: {
                x: 0,
                y: 0,
                inHome: true,
                htmlId: "gamer3-user3",
                dir: "bottom",
                oldDir: false,
                passAreas: [],
                steps: 0,
                isWin: false,
            },
            gamer4: {
                x: 0,
                y: 0,
                inHome: true,
                htmlId: "gamer4-user3",
                dir: "bottom",
                oldDir: false,
                passAreas: [],
                steps: 0,
                isWin: false,
            },
        },
    },
    user4: {
        team: "red",
        color: "#FF0000",
        trans: "25",
        colorWithOpc: "#FF000080",
        firstDir: "right",
        borderX: 0 + borderWidthForRect / 2,
        borderY: 0 + borderWidthForRect / 2,
        gamers: {
            gamer1: {
                x: 0,
                y: 0,
                inHome: true,
                htmlId: "gamer1-user4",
                dir: "right",
                oldDir: false,
                passAreas: [],
                steps: 0,
                isWin: false,
            },
            gamer2: {
                x: 0,
                y: 0,
                inHome: true,
                htmlId: "gamer2-user4",
                dir: "right",
                oldDir: false,
                passAreas: [],
                steps: 0,
                isWin: false,
            },
            gamer3: {
                x: 0,
                y: 0,
                inHome: true,
                htmlId: "gamer3-user4",
                dir: "right",
                oldDir: false,
                passAreas: [],
                steps: 0,
                isWin: false,
            },
            gamer4: {
                x: 0,
                y: 0,
                inHome: true,
                htmlId: "gamer4-user4",
                dir: "right",
                oldDir: false,
                passAreas: [],
                steps: 0,
                isWin: false,
            },
        },
    },
};

// Triangles in the middle
// - left (Red) triangle
ctx.fillStyle = users.user4.colorWithOpc;
ctx.beginPath();
ctx.moveTo(widthForRect, heightForRect);
ctx.lineTo(
    widthForRect + widthForRectInMiddle / 2,
    heightForRect + heightForRectInMiddle / 2
);
ctx.lineTo(widthForRect, heightForRect + heightForRectInMiddle);
ctx.fill();

// - Top (Green) triangle
ctx.fillStyle = users.user3.colorWithOpc;
ctx.beginPath();
ctx.moveTo(widthForRect, heightForRect);
ctx.lineTo(
    widthForRect + widthForRectInMiddle / 2,
    heightForRect + heightForRectInMiddle / 2
);
ctx.lineTo(widthForRect + widthForRectInMiddle, heightForRect);
ctx.fill();

// - Right (Yellow) triangle
ctx.fillStyle = users.user2.colorWithOpc;
ctx.beginPath();
ctx.moveTo(widthForRect + widthForRectInMiddle, heightForRect);
ctx.lineTo(
    widthForRect + widthForRectInMiddle / 2,
    heightForRect + heightForRectInMiddle / 2
);
ctx.lineTo(
    widthForRect + widthForRectInMiddle,
    heightForRect + heightForRectInMiddle
);
ctx.fill();

// - Bottom (Blue) triangle
ctx.fillStyle = users.user1.colorWithOpc;
ctx.beginPath();
ctx.moveTo(
    widthForRect + widthForRectInMiddle,
    heightForRect + heightForRectInMiddle
);
ctx.lineTo(
    widthForRect + widthForRectInMiddle / 2,
    heightForRect + heightForRectInMiddle / 2
);
ctx.lineTo(widthForRect, heightForRect + heightForRectInMiddle);
ctx.fill();

var rectWidth = widthForRect / 6;
var rectHeight = heightForRect / 6;

const listAreas = [
    // Left Red
    {
        x: 0 * rectWidth,
        y: heightForRect,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 1 * rectWidth,
        y: heightForRect,
        w: rectWidth,
        h: rectHeight,
        color: users.user4.colorWithOpc,
        save: true,
        forTeam: "red",
        status: "♕",
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 2 * rectWidth,
        y: heightForRect,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 3 * rectWidth,
        y: heightForRect,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 4 * rectWidth,
        y: heightForRect,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 5 * rectWidth,
        y: heightForRect,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },

    {
        x: 0 * rectWidth,
        y: heightForRect + rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: "→",
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 1 * rectWidth,
        y: heightForRect + rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: users.user4.colorWithOpc,
        save: true,
        forTeam: "red",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 2 * rectWidth,
        y: heightForRect + rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: users.user4.colorWithOpc,
        save: true,
        forTeam: "red",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 3 * rectWidth,
        y: heightForRect + rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: users.user4.colorWithOpc,
        save: true,
        forTeam: "red",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 4 * rectWidth,
        y: heightForRect + rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: users.user4.colorWithOpc,
        save: true,
        forTeam: "red",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 5 * rectWidth,
        y: heightForRect + rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: users.user4.colorWithOpc,
        save: true,
        forTeam: "red",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },

    {
        x: 0 * rectWidth,
        y: heightForRect + rectHeight * 2,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 1 * rectWidth,
        y: heightForRect + rectHeight * 2,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 2 * rectWidth,
        y: heightForRect + rectHeight * 2,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: true,
        forTeam: false,
        status: "☆",
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 3 * rectWidth,
        y: heightForRect + rectHeight * 2,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 4 * rectWidth,
        y: heightForRect + rectHeight * 2,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 5 * rectWidth,
        y: heightForRect + rectHeight * 2,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },

    // Top Green
    {
        x: widthForRect,
        y: 0 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect,
        y: 1 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect,
        y: 2 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: true,
        forTeam: false,
        status: "☆",
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect,
        y: 3 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect,
        y: 4 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect,
        y: 5 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },

    {
        x: widthForRect + rectWidth,
        y: 0 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: "↓",
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth,
        y: 1 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: users.user3.colorWithOpc,
        save: true,
        forTeam: "green",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth,
        y: 2 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: users.user3.colorWithOpc,
        save: true,
        forTeam: "green",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth,
        y: 3 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: users.user3.colorWithOpc,
        save: true,
        forTeam: "green",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth,
        y: 4 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: users.user3.colorWithOpc,
        save: true,
        forTeam: "green",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth,
        y: 5 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: users.user3.colorWithOpc,
        save: true,
        forTeam: "green",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },

    {
        x: widthForRect + rectWidth * 2,
        y: 0 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth * 2,
        y: 1 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: users.user3.colorWithOpc,
        save: true,
        forTeam: "green",
        status: "♕",
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth * 2,
        y: 2 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth * 2,
        y: 3 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth * 2,
        y: 4 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth * 2,
        y: 5 * rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },

    // Right Yellow
    {
        x: 0 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 1 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 2 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 3 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: true,
        forTeam: false,
        status: "☆",
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 4 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 5 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },

    {
        x: 0 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect + rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: users.user2.colorWithOpc,
        save: true,
        forTeam: "yellow",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 1 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect + rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: users.user2.colorWithOpc,
        save: true,
        forTeam: "yellow",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 2 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect + rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: users.user2.colorWithOpc,
        save: true,
        forTeam: "yellow",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 3 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect + rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: users.user2.colorWithOpc,
        save: true,
        forTeam: "yellow",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 4 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect + rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: users.user2.colorWithOpc,
        save: true,
        forTeam: "yellow",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 5 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect + rectHeight,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: "←",
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },

    {
        x: 0 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect + rectHeight * 2,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 1 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect + rectHeight * 2,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 2 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect + rectHeight * 2,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 3 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect + rectHeight * 2,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 4 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect + rectHeight * 2,
        w: rectWidth,
        h: rectHeight,
        color: users.user2.colorWithOpc,
        save: true,
        forTeam: "yellow",
        status: "♕",
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: 5 * rectWidth + widthForRect + widthForRectInMiddle,
        y: heightForRect + rectHeight * 2,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },

    // Bottom Blue
    {
        x: widthForRect,
        y: 0 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect,
        y: 1 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect,
        y: 2 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect,
        y: 3 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect,
        y: 4 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: users.user1.colorWithOpc,
        save: true,
        forTeam: "blue",
        status: "♕",
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect,
        y: 5 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },

    {
        x: widthForRect + rectWidth,
        y: 0 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: users.user1.colorWithOpc,
        save: false,
        forTeam: "blue",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth,
        y: 1 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: users.user1.colorWithOpc,
        save: true,
        forTeam: "blue",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth,
        y: 2 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: users.user1.colorWithOpc,
        save: true,
        forTeam: "blue",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth,
        y: 3 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: users.user1.colorWithOpc,
        save: true,
        forTeam: "blue",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth,
        y: 4 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: users.user1.colorWithOpc,
        save: true,
        forTeam: "blue",
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth,
        y: 5 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: "↑",
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },

    {
        x: widthForRect + rectWidth * 2,
        y: 0 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth * 2,
        y: 1 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth * 2,
        y: 2 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: true,
        forTeam: false,
        status: "☆",
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth * 2,
        y: 3 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth * 2,
        y: 4 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
    {
        x: widthForRect + rectWidth * 2,
        y: 5 * rectHeight + heightForRect + heightForRectInMiddle,
        w: rectWidth,
        h: rectHeight,
        color: whiteColor,
        save: false,
        forTeam: false,
        status: false,
        areaId: function () {
            return `id-${this.x + 20}-${this.y + 20}`;
        },
    },
];

function drawBorder(xPos, yPos, width, height, thickness = 0) {
    ctx.strokeStyle = "#000";
    ctx.strokeRect(
        xPos - thickness,
        yPos - thickness,
        width + thickness * 2,
        height + thickness * 2
    );
}

function drawRect(xPos, yPos, width, height, color = "#fff", sava, status) {
    ctx.fillStyle = color;
    ctx.fillRect(xPos, yPos, width, height);
    drawBorder(xPos, yPos, width, height);
    if (status) {
        ctx.fillStyle = "#000";
        ctx.font = "bold 20px serif";

        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillText(status, xPos + width / 2, yPos + height / 2);
    }
}

listAreas.forEach((area) => {
    drawRect(
        area.x,
        area.y,
        area.w,
        area.h,
        area.color,
        area.save,
        area.status
    );
});

ctx.lineWidth = borderWidthForRect;

ctx.strokeStyle = users.user4.color;
ctx.strokeRect(
    users.user4.borderX,
    users.user4.borderY,
    widthForRect - borderWidthForRect,
    heightForRect - borderWidthForRect
);

ctx.strokeStyle = users.user3.color;
ctx.strokeRect(
    users.user3.borderX,
    users.user3.borderY,
    widthForRect - borderWidthForRect,
    heightForRect - borderWidthForRect
);

ctx.strokeStyle = users.user1.color;
ctx.strokeRect(
    users.user1.borderX,
    users.user1.borderY,
    widthForRect - borderWidthForRect,
    heightForRect - borderWidthForRect
);

ctx.strokeStyle = users.user2.color;
ctx.strokeRect(
    users.user2.borderX,
    users.user2.borderY,
    widthForRect - borderWidthForRect,
    heightForRect - borderWidthForRect
);

function createHome(user, x, y, color = "#000000", trans = 25) {
    ctx.fillStyle = "#fff";

    ctx.fillRect(
        x + borderWidthForRect,
        y + borderWidthForRect,
        widthForRect - borderWidthForRect * 2,
        heightForRect - borderWidthForRect * 2
    );

    const filteredItems = [...gamerItems].filter((item) => {
        return `${item.dataset.user}` === user;
    });

    // Create Circles
    if (filteredItems) {
        [
            [2, 2],
            [2, 4],
            [4, 2],
            [4, 4],
        ].map((angle, i) => {
            let xAngle = x + borderWidthForRect * angle[0];
            let yAngle = y + borderWidthForRect * angle[1];
            ctx.beginPath();
            ctx.arc(xAngle, yAngle, radius, 0, 2 * Math.PI);
            ctx.fillStyle = color + trans;
            ctx.fill();

            const item = document.getElementById(`gamer${i + 1}-user${user}`);

            item.style = `
                color: ${color};
                width: ${borderWidthForRect}px;
                height: ${borderWidthForRect}px;
                font-size: ${borderWidthForRect}px;
                line-height: ${borderWidthForRect}px;
                top: ${yAngle}px;
                left: ${xAngle}px;

            `;

            if (users[`user${user}`]) {
                users[`user${user}`].gamers[`gamer${i + 1}`].x = xAngle;
                users[`user${user}`].gamers[`gamer${i + 1}`].y = yAngle;
            }
        });
    }
}

createHome("1", 0, height - heightForRect, "#0000FF");
createHome("2", width - widthForRect, height - heightForRect, "#ffff00");
createHome("3", width - widthForRect, 0, "#00FF00");
createHome("4", 0, 0, "#ff0000");

[...userTitle].map((e) => {
    e.style = `
        top: ${users["user" + e.dataset.user].borderY - radius + 1}px;
        left: ${users["user" + e.dataset.user].borderX}px;
    `;
    console.log(e.dataset);
});

const checkAreaIsActive = (x, y) => {
    return (
        listAreas.filter((area) => {
            return (
                x >= area.x &&
                x <= area.x + area.w &&
                y >= area.y &&
                y <= area.y + area.h
            );
        }).length > 0
    );
};

let dd = "";

canvasBox.addEventListener("mousedown", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    let gamersInActiveArea = [];
    dd = e.target;

    let gamerObject =
        users[`user${activeUser}`].gamers[`gamer${e.target.dataset.gamer}`];

    let areaActive = listAreas.filter((area) => {
        return (
            x >= area.x &&
            x <= area.x + area.w &&
            y >= area.y &&
            y <= area.y + area.h
        );
    })[0];
    areaActiveX = [areaActive?.x, areaActive?.x + areaActive?.w];
    areaActiveY = [areaActive?.y, areaActive?.y + areaActive?.h];
    // getDirs(areaActive?.x, areaActive?.y);

    if (areaActive) {
        gamersInActiveArea = Object.entries(
            users[`user${activeUser}`].gamers
        ).filter((g) => {
            return (
                g[1]?.x >= areaActiveX[0] &&
                g[1]?.x <= areaActiveX[1] &&
                g[1]?.y >= areaActiveY[0] &&
                g[1]?.y <= areaActiveY[1]
            );
        });

        if (gamersInActiveArea.length === 0) {
            alertBox.textContent = "No Gamers here!!";
        } else {
            users[`user${activeUser}`].gamers = {
                ...users[`user${activeUser}`].gamers,
                [gamersInActiveArea[0][0]]: gamersInActiveArea[0][1],
            };
        }
    }

    if (
        e.target.classList.contains("gamer") &&
        x >=
            users[`user${e.target.dataset.user}`].gamers[
                `gamer${e.target.dataset.gamer}`
            ].x -
                radius &&
        x <=
            users[`user${e.target.dataset.user}`].gamers[
                `gamer${e.target.dataset.gamer}`
            ].x +
                radius &&
        y >=
            users[`user${e.target.dataset.user}`].gamers[
                `gamer${e.target.dataset.gamer}`
            ].y -
                radius &&
        y <=
            users[`user${e.target.dataset.user}`].gamers[
                `gamer${e.target.dataset.gamer}`
            ].y +
                radius &&
        users[`user${e.target.dataset.user}`].gamers[
            `gamer${e.target.dataset.gamer}`
        ].inHome
    ) {
        const { x: xHome, y: yHome } = listAreas.filter((area) => {
            return (
                area.forTeam === users[`user${e.target.dataset.user}`].team &&
                area.status === "♕"
            );
        })[0];

        e.target.style.top = `${yHome + radius}px`;
        e.target.style.left = `${xHome + radius}px`;

        gamerObject = {
            ...gamerObject,
            x: xHome + 20,
            y: yHome + 20,
            inHome: false,
            steps: (gamerObject.steps += 1),
        };

        users[`user${activeUser}`].gamers = {
            ...users[`user${activeUser}`].gamers,
            [`gamer${e.target.dataset.gamer}`]: {
                ...gamerObject,
            },
        };

        passAreasUpdate(
            e.target,
            gamerObject,
            `id-${xHome + 20}-${yHome + 20}`
        );

        gamerObject =
            users[`user${activeUser}`].gamers[`gamer${e.target.dataset.gamer}`];
    } else if (
        e.target.classList.contains("gamer") &&
        users[`user${e.target.dataset.user}`].gamers[
            `gamer${e.target.dataset.gamer}`
        ].inHome === false
    ) {
        moveStep(e.target, gamerObject);
    }
});

function moveStep(targetElement, gamerObject) {
    if (gamerObject.steps > 50) {
        console.log(users[`user${activeUser}`].firstDir);
        gamerObject = {
            ...gamerObject,
            dir: users[`user${activeUser}`].firstDir,
        };
        updatingGamerObject(targetElement, gamerObject);
    }
    if (gamerObject.steps === 57) {
        gamerObject = {
            ...gamerObject,
            isWin: true,
        };
        updatingGamerObject(targetElement, gamerObject);
    }
    if (gamerObject.dir === "top" && !gamerObject.isWin) {
        targetElement.style.top = `${gamerObject.y - rectHeight}px`;

        gamerObject = {
            ...gamerObject,
            y: gamerObject.y - rectHeight,
        };

        updatingGamerObject(targetElement, gamerObject);
    } else if (gamerObject.dir === "left" && !gamerObject.isWin) {
        targetElement.style.left = `${gamerObject.x - rectWidth}px`;

        gamerObject = {
            ...gamerObject,
            x: gamerObject.x - rectWidth,
        };

        updatingGamerObject(targetElement, gamerObject);
    } else if (gamerObject.dir === "right" && !gamerObject.isWin) {
        targetElement.style.left = `${gamerObject.x + rectWidth}px`;

        gamerObject = {
            ...gamerObject,
            x: gamerObject.x + rectWidth,
        };

        updatingGamerObject(targetElement, gamerObject);
    } else if (gamerObject.dir === "bottom" && !gamerObject.isWin) {
        targetElement.style.top = `${gamerObject.y + rectHeight}px`;

        gamerObject = {
            ...gamerObject,
            y: gamerObject.y + rectHeight,
        };

        updatingGamerObject(targetElement, gamerObject);
    } else if (gamerObject.dir === false) {
        if (gamerObject.oldDir === "top") {
            const di = getDirs(
                gamerObject.x,
                gamerObject.y - 40,
                gamerObject.passAreas
            );
            changeDir(gamerObject.dir, di.trueDir, targetElement, gamerObject);
        } else if (gamerObject.oldDir === "right") {
            const di = getDirs(
                gamerObject.x + 40,
                gamerObject.y,
                gamerObject.passAreas
            );
            changeDir(gamerObject.dir, di.trueDir, targetElement, gamerObject);
        } else if (gamerObject.oldDir === "bottom") {
            const di = getDirs(
                gamerObject.x,
                gamerObject.y + 40,
                gamerObject.passAreas
            );
            changeDir(gamerObject.dir, di.trueDir, targetElement, gamerObject);
        } else if (gamerObject.oldDir === "left") {
            const di = getDirs(
                gamerObject.x - 40,
                gamerObject.y,
                gamerObject.passAreas
            );
            changeDir(gamerObject.dir, di.trueDir, targetElement, gamerObject);
        }
    }
}

function changeDir(prevDir, newDir, targetElement, gamerObject) {
    if ((prevDir === "top", newDir === "left")) {
        targetElement.style.top = `${gamerObject.y - rectHeight}px`;
        targetElement.style.left = `${gamerObject.x - rectWidth}px`;

        gamerObject = {
            ...gamerObject,
            x: gamerObject.x - rectWidth,
            y: gamerObject.y - rectHeight,
            dir: newDir,
            oldDir: "left",
        };

        updatingGamerObject(targetElement, gamerObject);
    } else if ((prevDir === "right", newDir === "top")) {
        targetElement.style.top = `${gamerObject.y - rectHeight}px`;
        targetElement.style.left = `${gamerObject.x + rectWidth}px`;

        gamerObject = {
            ...gamerObject,
            x: gamerObject.x + rectWidth,
            y: gamerObject.y - rectHeight,
            dir: newDir,
            oldDir: "top",
        };

        updatingGamerObject(targetElement, gamerObject);
    } else if ((prevDir === "bottom", newDir === "right")) {
        targetElement.style.top = `${gamerObject.y + rectHeight}px`;
        targetElement.style.left = `${gamerObject.x + rectWidth}px`;

        gamerObject = {
            ...gamerObject,
            x: gamerObject.x + rectWidth,
            y: gamerObject.y + rectHeight,
            dir: newDir,
            oldDir: "right",
        };

        updatingGamerObject(targetElement, gamerObject);
    } else if ((prevDir === "left", newDir === "bottom")) {
        targetElement.style.top = `${gamerObject.y + rectHeight}px`;
        targetElement.style.left = `${gamerObject.x - rectWidth}px`;

        gamerObject = {
            ...gamerObject,
            x: gamerObject.x - rectWidth,
            y: gamerObject.y + rectHeight,
            dir: newDir,
            oldDir: "bottom",
        };

        updatingGamerObject(targetElement, gamerObject);
    }
}

function getDirs(x, y, passAreas = []) {
    const dirs = {
        top: false,
        left: false,
        right: false,
        bottom: false,
    };

    let areaActiveTop = listAreas.filter((area) => {
        return (
            x >= area.x &&
            x <= area.x + area.w - 1 &&
            y - rectHeight >= area.y &&
            y - rectHeight <= area.y + area.h - 1 &&
            (area.forTeam === false || area.status === "♕") &&
            !passAreas?.includes(area.areaId())
        );
    });
    dirs.top = areaActiveTop.length > 0;

    let areaActiveLeft = listAreas.filter((area) => {
        return (
            x - rectWidth >= area.x &&
            x - rectWidth <= area.x + area.w - 1 &&
            y >= area.y &&
            y <= area.y + area.h - 1 &&
            (area.forTeam === false || area.status === "♕") &&
            !passAreas?.includes(area.areaId())
        );
    });
    dirs.left = areaActiveLeft.length > 0;

    let areaActiveRight = listAreas.filter((area) => {
        return (
            x + rectWidth >= area.x &&
            x + rectWidth <= area.x + area.w - 1 &&
            y >= area.y &&
            y <= area.y + area.h - 1 &&
            (area.forTeam === false || area.status === "♕") &&
            !passAreas?.includes(area.areaId())
        );
    });
    dirs.right = areaActiveRight.length > 0;

    let areaActiveBottom = listAreas.filter((area) => {
        return (
            x >= area.x &&
            x <= area.x + area.w - 1 &&
            y + rectHeight >= area.y &&
            y + rectHeight <= area.y + area.h - 1 &&
            (area.forTeam === false || area.status === "♕") &&
            !passAreas?.includes(area.areaId())
        );
    });
    dirs.bottom = areaActiveBottom.length > 0;

    let arrayOfDirs = Object.entries(dirs).filter((e) => e[1] === true);

    return {
        trueDir: arrayOfDirs.length > 0 ? arrayOfDirs[0][0] : false,
        dirs,
    };
}

function passAreasUpdate(targetElement, gamerObject, idFormat) {
    users[`user${activeUser}`].gamers = {
        ...users[`user${activeUser}`].gamers,
        [`gamer${targetElement.dataset.gamer}`]: {
            ...gamerObject,
            passAreas: [...gamerObject.passAreas, idFormat],
        },
    };
}

function updatingGamerObject(targetElement, gamerObject) {
    users[`user${activeUser}`].gamers = {
        ...users[`user${activeUser}`].gamers,
        [`gamer${targetElement.dataset.gamer}`]: {
            ...gamerObject,
        },
    };

    gamerObject =
        users[`user${activeUser}`].gamers[
            `gamer${targetElement.dataset.gamer}`
        ];

    passAreasUpdate(
        targetElement,
        gamerObject,
        `id-${gamerObject.x}-${gamerObject.y}`
    );

    gamerObject =
        users[`user${activeUser}`].gamers[
            `gamer${targetElement.dataset.gamer}`
        ];

    const dirs = getDirs(
        gamerObject.x,
        gamerObject.y,
        users[`user${activeUser}`].gamers[`gamer${targetElement.dataset.gamer}`]
            .passAreas
    );

    console.table(dirs.dirs);

    gamerObject = {
        ...gamerObject,
        oldDir: gamerObject.dir,
        dir: dirs.trueDir,
        steps: (gamerObject.steps += 1),
    };

    users[`user${activeUser}`].gamers = {
        ...users[`user${activeUser}`].gamers,
        [`gamer${targetElement.dataset.gamer}`]: {
            ...gamerObject,
        },
    };

    console.log(gamerObject);
}

function delay(i) {
    setTimeout(function () {
        moveStep(
            dd,
            users[`user${activeUser}`].gamers[`gamer${dd.dataset.gamer}`]
        );
    }, 200 * i);
}

document.getElementById("dices").addEventListener("click", (e) => {
    activeUser = "2";
    // for (let i = 0; i < 3; i++) {
    //     delay(i);
    // }
    e.currentTarget.classList.add("anima");

    const allItems = document.querySelectorAll("#dices *");

    [...allItems].map((i) => {
        i.style.display = "none";
    });

    const randomNum = Math.floor(Math.random() * 6 + 1);

    const dice = document.getElementById(`image-dice-${randomNum}`);
    dice.style.display = "block";
    console.log(dice);
});

document.getElementById("dices").addEventListener("animationend", (e) => {
    e.currentTarget.classList.remove("anima");
});

const radios = document.querySelectorAll("[type='radio']");
[...radios].map((e) => {
    e.addEventListener("click", () => {
        activeUser = e.value;
        const activeGamers = [...gamerItems].filter((g) => {
            g.classList.remove("top-bottom");
            return g.dataset.user === `${activeUser}`;
        });

        document.getElementById("active-border").style = `
        width: ${widthForRect}px;
        height: ${heightForRect}px;
        border-width: ${borderWidthForRect}px;
        top: ${users["user" + activeUser].borderY - radius}px;
        left: ${users["user" + activeUser].borderX - radius}px;
        display: block;
        `;

        activeGamers.map((g) => {
            g.classList.add("top-bottom");
        });
    });
});
