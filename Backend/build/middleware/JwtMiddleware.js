"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function jwtMiddleware(JwtService) {
    return (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: 'Token not provided' });
        }
        try {
            const decoded = JwtService.verifyToken(token);
            req.user = decoded;
            next();
        }
        catch (error) {
            return res.status(401).json({ message: 'Invalid token' });
        }
    };
}
exports.default = jwtMiddleware;
