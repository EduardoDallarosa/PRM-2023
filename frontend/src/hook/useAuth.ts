export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}