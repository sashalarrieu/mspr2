/*import javax.security.sasl.AuthenticationException;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;

import jakarta.servlet.http.HttpServletRequest;

public class ApiKeyAuthentificationFilter extends AbstractAuthenticationProcessingFilter {

    protected ApiKeyAuthentificationFilter() {
        super(new AntPathRequestMatcher("/api/**"));
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        String apiKey = request.getHeader("Api-Key");
        return getAuthenticationManager().authenticate(new ApiKeyAuthenticationToken(apiKey));
    }
    
    // ...
}
*/